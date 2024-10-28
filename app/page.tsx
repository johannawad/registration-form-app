import type { Metadata } from "next";
import { Form } from "./components/form/Form";

export default function IndexPage() {
  return <Form />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
