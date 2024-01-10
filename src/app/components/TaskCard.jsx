"use client";

import { useRouter } from "next/navigation";

function TaskCard({ task }) {
    const router = useRouter();

    return (
        <div className="bg-slate-900 p-3 m-3 hover:cursor-pointer hover:bg-slate-800"
            onClick={() => { router.push('/tasks/edit/' + task.id); }}>
            <h4 className="text-center text-orange-400 text-xl font-bold mb-10">{task.title}</h4>
            <p className="text-center mb-4">{task.description}</p>
        </div>
    );
}

export default TaskCard;