import { useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import "./RepSearchBox.css";

type Inputs = {
  postCode: string;
};

const postCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

export default function RepresentativeSearchBox({
  setPostCode,
}: {
  setPostCode: (postCode: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    ({ postCode }) =>
      setPostCode(postCode.replaceAll(/[\s-]+/g, "").toUpperCase()),
    [setPostCode],
  );

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises -- this is what rhf recommends!
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="postalCode">Enter your postal code</label>
      <input
        type="text"
        id="postalCode"
        defaultValue=""
        {...register("postCode", {
          required: true,
          pattern: postCodePattern,
        })}
      />
      {errors.postCode?.type === "required" && (
        <p role="alert">Input your postal code.</p>
      )}
      {errors.postCode?.type === "pattern" && (
        <p role="alert">
          Postal code should be in the format &quot;H0H 0H0&quot;.
        </p>
      )}

      <input type="submit" value="Next" />
    </form>
  );
}
