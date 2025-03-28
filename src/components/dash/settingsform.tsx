import { useEffect, useState } from "react";

interface UserSettings {
    fontSize: number;
    fontFamily: string;
    lineHeight: number;
    textAlign: string;
}

const SettingsForm: React.FC = () => {
    const [userSettings, setUserSettings] = useState<UserSettings>({
      fontSize: 16,
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      textAlign: "left",
    });
  
    useEffect(() => {
      // Load user settings from localStorage on component mount
      const storedSettings = localStorage.getItem("userSettings");
      if (storedSettings) {
        setUserSettings(JSON.parse(storedSettings));
      }
    }, []);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { id, value } = e.target;
      setUserSettings((prevSettings: any) => ({
        ...prevSettings,
        [id]: value,
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      localStorage.setItem("userSettings", JSON.stringify(userSettings));
      alert("Settings saved!");
    };
  
    return (
      <form className="text-gray-800 space-y-4" onSubmit={handleSubmit}>
        {/* Font Size */}
        <div>
          <label
            htmlFor="fontSize"
            className="block text-sm font-medium text-gray-700"
          >
            Font Size
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="fontSize"
              placeholder="Font Size (e.g., 16)"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              value={userSettings.fontSize}
              onChange={handleChange}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Enter the font size in pixels (e.g., 14, 16, 18).
          </p>
        </div>
  
        {/* Font Family */}
        <div>
          <label
            htmlFor="fontFamily"
            className="block text-sm font-medium text-gray-700"
          >
            Font Family
          </label>
          <div className="mt-1">
            <select
              id="fontFamily"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              value={userSettings.fontFamily}
              onChange={handleChange}
            >
              <option value="sans-serif">Sans-Serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
            </select>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Select your preferred font family.
          </p>
        </div>
  
        {/* Line Height */}
        <div>
          <label
            htmlFor="lineHeight"
            className="block text-sm font-medium text-gray-700"
          >
            Line Height
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="lineHeight"
              placeholder="Line Height (e.g., 1.5)"
              step="0.1"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              value={userSettings.lineHeight}
              onChange={handleChange}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Enter the line height as a decimal (e.g., 1.2, 1.5, 1.8).
          </p>
        </div>
  
        {/* Text Alignment */}
        <div>
          <label
            htmlFor="textAlign"
            className="block text-sm font-medium text-gray-700"
          >
            Text Alignment
          </label>
          <div className="mt-1">
            <select
              id="textAlign"
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
              value={userSettings.textAlign}
              onChange={handleChange}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Select the desired text alignment.
          </p>
        </div>
  
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Settings
          </button>
        </div>
      </form>
    );
  };
  
  export default SettingsForm;