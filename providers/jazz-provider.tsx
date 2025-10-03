import { Account } from "@/lib/db/schema";
import { useClerk } from "@clerk/clerk-expo";
import { JazzExpoProviderWithClerk } from "jazz-tools/expo";

export const JazzAndAuth = ({ children }: { children: React.ReactNode }) => {
  const clerk = useClerk();

  return (
    <JazzExpoProviderWithClerk
      AccountSchema={Account}
      clerk={clerk}
      sync={{
        peer: `wss://cloud.jazz.tools/?key=Y29fejZBMzhDd2FXdmJ6VzJYWlA0aXd6aHJRNjlpfGNvX3pIckNrNFRHcVVORDFoMjlvZ1ZpNG13MnUzNHxjb196Tk11WmdCcHdIUDNBNGZMTlk0SG5Wc3o4WDg`,
      }}
    >
      {children}
    </JazzExpoProviderWithClerk>
  );
};
