export type UserRole = "user" | "admin";

export type User = {
	id: string;
	tag: string;
	name: string;
	email: string;
	role: UserRole;
};

export type LoginInput = {
	login: string;
	password: string;
};

export type RegistrationInput = {
	tag: string;
	password: string;
	name: string;
	email: string;
};

type ErrorResponse = {
	detail?: string | Array<{ msg?: string }>;
};

export class AuthApiError extends Error {
	status: number;

	constructor(status: number, message: string) {
		super(message);
		this.name = "AuthApiError";
		this.status = status;
	}
}

const authApiUrl = "/api/v1/auth";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
	const headers = new Headers(init?.headers);
	if (init?.body) {
		headers.set("Content-Type", "application/json");
	}

	const response = await fetch(`${authApiUrl}${path}`, {
		...init,
		credentials: "include",
		headers,
	});

	if (!response.ok) {
		let message = "Не удалось выполнить запрос";

		try {
			const error = (await response.json()) as ErrorResponse;
			if (typeof error.detail === "string") {
				message = error.detail;
			} else if (Array.isArray(error.detail)) {
				message = error.detail
					.map((item) => item.msg)
					.filter(Boolean)
					.join(". ");
			}
		} catch {
			// The status code is enough when the response has no JSON body.
		}

		throw new AuthApiError(response.status, message);
	}

	return (await response.json()) as T;
}

export function login(input: LoginInput): Promise<User> {
	return request<User>("/login", {
		method: "POST",
		body: JSON.stringify(input),
	});
}

export function register(input: RegistrationInput): Promise<User> {
	return request<User>("/register", {
		method: "POST",
		body: JSON.stringify(input),
	});
}

export function getCurrentUser(): Promise<User> {
	return request<User>("/me");
}
