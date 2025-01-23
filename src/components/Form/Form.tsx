import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";

interface IFormInput {
  modelName: string;
  modelType: string;
  llm: string;
  description: string;
}

interface FormComponentProps {
  onClose: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({onClose}) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    defaultValues: {
      modelName: "",
      modelType: "",
      llm: "",
      description: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Collected Data:", data);
    onClose();
  };

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pt-3">
          {/* Model Name */}
          <div>
            <label className="block text-sm text-black  mb-1">Model Name</label>
            <Controller
              name="modelName"
              control={control}
              rules={{ required: "Model Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  placeholder="Enter model name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              )}
            />
            {errors.modelName && <p className="text-red-500 text-sm">{errors.modelName.message}</p>}
          </div>

          {/* Model Type */}
          <div>
            <label className="block text-sm text-black  mb-1">Model Type</label>
            <Controller
              name="modelType"
              control={control}
              rules={{ required: "Model Type is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="" disabled>Select</option>
                  <option value="Extraction">Extraction</option>
                  <option value="Classification">Classification</option>
                </select>
              )}
            />
            {errors.modelType && <p className="text-red-500 text-sm">{errors.modelType.message}</p>}
          </div>

          {/* LLM */}
          <div>
            <label className="block text-sm text-black  mb-1">LLM</label>
            <Controller
              name="llm"
              control={control}
              rules={{ required: "LLM is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="" disabled>Select</option>
                  <option value="Model-1">Model 1</option>
                  <option value="Model-2">Model 2</option>
                  <option value="Model-3">Model 3</option>
                </select>
              )}
            />
            {errors.llm && <p className="text-red-500 text-sm">{errors.llm.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-black mb-1">Description</label>
            <Controller
              name="description"
              control={control}
              rules={{
                required: "Description is required",
                maxLength: { value: 200, message: "Description can't exceed 200 characters" },
              }}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Enter model description"
                  className="w-full px-4 py-2 border h-[101px] rounded-lg"
                  rows={3}
                ></textarea>
              )}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>

          {/* Buttons */}
          <div className="flex justify-evenly gap-4">
            <button
              onClick={onClose}
              type="button"
              className="w-full bg-[#E7E6FA] text-[#4F46E5] h-[36px] px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-[#4F46E5] text-white h-[36px] px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
  );
};

export default FormComponent;
