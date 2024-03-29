import { NextResponse } from 'next/server'
import { prisma } from "@/app/libs/prisma";

export async function GET(request, {params}) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    });
    return NextResponse.json(task);
}

export async function PUT(request, {params}) {
    const data = await request.json();
    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data
    });

    return NextResponse.json(taskUpdated)
}

export async function DELETE(request, {params}) {
    try {
        const taskRemoved = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        });
        console.log(taskRemoved);
        return NextResponse.json(taskRemoved)
    }
    catch(error) {
        console.log(error)
        return NextResponse.json({message: "No se pudo eliminar la tarea"})
    }
}