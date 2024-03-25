import { FC } from "react";

interface NkButtonProps {
  label: string;
}

export const NkButton: FC<NkButtonProps> = ({ label }) => {
  return <button type="button">{label}</button>;
};
