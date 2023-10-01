// import axios from "axios";
// import axios from "axios";
// import { useState } from "react";
// import { useMutation } from "react-query";
// import { authUser } from "../../../api";

interface RightSectionProps {
  type: string;
}

const RightSection: React.FC<RightSectionProps> = () => {
  // const [formData, setFormData] = useState<UserInfo>({
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const { mutateAsync } = useMutation({
  //   mutationFn: authUser,
  // });

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const res = await mutateAsync(formData);
  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return <>Right Section</>;
};

export default RightSection;

// 1800
