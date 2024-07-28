'use client'

import { useRef } from "react";
import { updateNameAction } from "./actions";
import { useFormState, useFormStatus } from "react-dom";

export default function Form({ userId }: { userId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useFormState(updateNameAction, {
    userId: userId,
    name: "",
    message: ''
  });

  if (state.message === 'success') {
    formRef.current?.reset();
  }

  return (
    <form ref={formRef}
      action={action}>
      <input className="text-blaack border border-gray-400" type="text" name="name" />
      <SubmitButton />
    </form>
  );
}

export function SubmitButton() {
  const status = useFormStatus();
  return <button className="bg-blue-500 hover:ng-blue-700 text-white font-bold py-2 px-4">{status.pending ? 'Saving' : 'Saved'}</button>
}