import { useSignIn } from "@clerk/clerk-expo";
import { useAccount, useIsAuthenticated } from "jazz-tools/expo";
import { Button } from "./Button";

export function AuthButton() {
  const { logOut, me } = useAccount();
  const { signIn, setActive, isLoaded } = useSignIn();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated) {
    return (
      <Button
        variant="filled"
        buttonSize="md"
        fullWidth
        onPress={() => logOut()}
      >
        Logout
        {me?.profile?.name}
      </Button>
    );
  }

  const onSignInPress = async () => {
    if (!isLoaded) return;
    const signInAttempt = await signIn.create({
      identifier: "M.Pohl@drk-rostock.de",
      password: `AMOSVs1357"ta`,
    });
    if (signInAttempt.status === "complete") {
      await setActive({ session: signInAttempt.createdSessionId });
    }
  };

  return (
    <Button variant="filled" buttonSize="md" fullWidth onPress={onSignInPress}>
      Sign In
    </Button>
  );
}
