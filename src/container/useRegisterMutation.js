import { useMutation, gql } from "@apollo/client";

/* UserCredentials = input: {
    email: "...",
    password: "..."
} */

const USER_REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

export const useRegisterMutation = () => {
    const [registerMutation, {data, loading, error }] = useMutation(USER_REGISTER);
    return { registerMutation, data, loading, error };
};

