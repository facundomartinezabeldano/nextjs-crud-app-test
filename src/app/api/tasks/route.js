import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET(request, response) {
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export async function POST(request, response) {
    const {title, description} = await request.json()
    const newTask = await prisma.task.create({
        data: {
            title,
            description,
        }
    })
    return NextResponse.json(newTask)
}