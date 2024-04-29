import { NextResponse } from "next/server";

type Todo = {
  title: string;
}

const todos: Todo[] = [
  { title: "読書" },
  { title: "プログラミング" },
  { title: "散歩" },
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return NextResponse.json(todos);
};

