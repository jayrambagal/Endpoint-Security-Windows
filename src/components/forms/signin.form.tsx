import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {IRSignIn} from "@/type/auth.interface";
import {Button, Input} from "react-daisyui";

type PropsTypes = {
  loading: boolean;
  onSubmit: (data: IRSignIn) => void;
};

export const SignInForm: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IRSignIn>();

  const onSubmit: SubmitHandler<IRSignIn> = (data) => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* E-mail input control */}
      <div className="mb-2 flex flex-col items-start">
        {errors.email && errors.email.message ? (
          <p className="text-sm mb-2 text-danger">{errors.email.message}</p>
        ) : (
          <p className="text-sm mb-2 text-slate-500">User ID.</p>
        )}
        <Input
          type="text"
          className="w-full h-8"
          placeholder="User ID"
          {...register("text", {required: "User Id is required"})}
        />
      </div>

      <div className="mb-6 flex flex-col items-start">
        {errors.password && errors.password.message ? (
          <p className="text-sm mb-2 text-danger">{errors.password.message}</p>
        ) : (
          <p className="text-sm mb-2 text-slate-500">Enter password.</p>
        )}
        <Input
          type="password"
          className="w-full h-8"
          placeholder="Password"
          {...register("password", {required: "Password is required."})}
        />
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          color="primary"
          className="w-[100px] h-[40px] flex justify-center items-center"
          disabled={props.loading}
        >
          {props.loading ? "Loading..." : "Login"}
        </Button>
      </div>
    </form>
  );
};
