import { useCallback } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import "./RepSearchBox.css";
import useLocale from "~/use-locale";

type Inputs = {
  postCode: string;
};

const postCodePattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

export default function RepresentativeSearchBox({
  setPostCode,
}: {
  setPostCode: (postCode: string) => void;
}) {
  const l = useLocale();

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
      <label htmlFor="postalCode">{l("enter-postal")}</label>
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
        <p role="alert">{l("error-input-postal")}</p>
      )}
      {errors.postCode?.type === "pattern" && (
        <p role="alert">{l("error-postal-format")}</p>
      )}

      <input type="submit" value={l("search-button")} />
    </form>
  );
}
