import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function NewModelPopup({ isOpen, togglePopup }) { //pros from modellibrary..

    const [formData, setFormData] = useState({
        modelName: "",
        modelType: "",
        llm: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        //logging the data into console with Prototype
        console.log("Collected Data:", formData);
        //prop witch is handled in the model library
        togglePopup();
    };

    return (
        //conditional rendering..
        isOpen ? (
            <div className="flex items-center justify-center bg-black fixed inset-0 bg-opacity-20">
                <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg">
                    <div className="flex justify-between border-b">
                        <h2 className="text-lg font-semibold mb-4">Create New Model</h2>
                        <button className="text-lg font-bold items-center"
                            onClick={togglePopup}
                        >
                            <RxCross2 />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 pt-3">
                        <div>
                            <label className="block text-sm font-medium mb-1">Model Name</label>
                            <input
                                type="text"
                                name="modelName"
                                value={formData.modelName}
                                onChange={handleChange}
                                placeholder="Enter model name"
                                className="w-full px-4 py-2 border rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Model Type</label>
                            <select
                                name="modelType"
                                value={formData.modelType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            >
                                <option value="" disabled>
                                    Select
                                </option>
                                <option value="Extraction">Extraction</option>
                                <option value="Classification">Classification</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">LLM</label>
                            <select
                                name="llm"
                                value={formData.llm}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg"
                            >
                                <option value="" disabled>
                                    Neural (Recommended)
                                </option>
                                <option value="Model-1">Model 1</option>
                                <option value="Model-2">Model 2</option>
                                <option value="Model-3">Model 3</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Description</label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Enter model description"
                                className="w-full px-4 py-2 border rounded-lg"
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-4 mt-6">
                        <button
                            onClick={togglePopup}
                            className="w-full bg-purple-100 text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        )
            :
            <></>
    );
}
