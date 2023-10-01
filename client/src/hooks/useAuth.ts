import { useMutation } from "@tanstack/react-query";
import { addUser } from "../api/index";

export const useSignUp = () => {
  return useMutation({
    mutationFn: addUser,
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  });
};
