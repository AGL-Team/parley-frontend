import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import type { PropsWithChildren } from "react";
import {
	AuthApiError,
	getCurrentUser,
	login as loginRequest,
	register as registerRequest,
} from "../api/auth";
import type {
	LoginInput,
	RegistrationInput,
	User,
} from "../api/auth";

type AuthStatus = "loading" | "authenticated" | "anonymous" | "error";

type AuthContextValue = {
	user: User | null;
	status: AuthStatus;
	login: (input: LoginInput) => Promise<User>;
	register: (input: RegistrationInput) => Promise<User>;
	refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useState<User | null>(null);
	const [status, setStatus] = useState<AuthStatus>("loading");
	const requestVersion = useRef(0);

	const refreshUser = useCallback(async () => {
		const version = ++requestVersion.current;

		try {
			const currentUser = await getCurrentUser();
			if (version !== requestVersion.current) return;
			setUser(currentUser);
			setStatus("authenticated");
		} catch (error) {
			if (version !== requestVersion.current) return;
			setUser(null);
			setStatus(
				error instanceof AuthApiError && error.status === 401
					? "anonymous"
					: "error",
			);
		}
	}, []);

	useEffect(() => {
		void refreshUser();
	}, [refreshUser]);

	const login = useCallback(async (input: LoginInput) => {
		const authenticatedUser = await loginRequest(input);
		requestVersion.current += 1;
		setUser(authenticatedUser);
		setStatus("authenticated");
		return authenticatedUser;
	}, []);

	const register = useCallback(async (input: RegistrationInput) => {
		const registeredUser = await registerRequest(input);
		requestVersion.current += 1;
		setUser(registeredUser);
		setStatus("authenticated");
		return registeredUser;
	}, []);

	const value = useMemo(
		() => ({ user, status, login, register, refreshUser }),
		[user, status, login, register, refreshUser],
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider");
	}
	return context;
}
