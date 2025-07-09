import React, { useState } from "react";

const FeedbackForm = ({ onClose, onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        position: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const randomSeed = Math.random().toString(36).substring(2, 10);
        const imageURL = `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`;
        const today = new Date();
        const formattedDate = today.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });

        const finalData = {
            name: form.name.trim(),
            position: form.position,
            description: form.description,
            image: imageURL,
            date: formattedDate,
        };

        onSubmit(finalData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <form
                onSubmit={handleSubmit}
                className="bg-background text-foreground p-6 rounded-lg w-[90%] max-w-md shadow-xl transition-colors"
            >
                <h3 className="mb-4 text-xl font-semibold text-center">
                    Give Feedback
                </h3>

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded bg-background text-foreground border-border"
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Your Position"
                    required
                    value={form.position}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded bg-background text-foreground border-border"
                />
                <textarea
                    name="description"
                    placeholder="Write your feedback here..."
                    required
                    rows="3"
                    value={form.description}
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded bg-background text-foreground border-border"
                />

                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-sm transition rounded bg-muted text-foreground hover:bg-muted/80"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm rounded bg-[#009E66] text-white hover:opacity-90 transition"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FeedbackForm;
