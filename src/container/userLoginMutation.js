import { useMutation, gql } from "@apollo/client";

const USER_LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`;

export const userLoginMutation = () => {
    const [loginMutation, {data, loading, error}] = useMutation(USER_LOGIN);
    return { loginMutation, data, loading, error };
}
