import SettingsForm from "../components/dash/settingsform";
import Header from "../components/header";

const Dashboard: React.FC = () => {
  const activeTab = 'settings'
  return (
    <div className="p-4 bg-gray-100 h-[80vh]">
      <Header />
      <span className="block mb-4 text-black">
        Welcome! Here you can see the progress through each blog post and change
        settings based on your preferred reading style.
      </span>
      {activeTab === "progress" ? (
        <p>Test</p>
      ) : (
        <div className="p-4 bg-white rounded shadow flex flex-col gap-10">
          <span className="text-3xl text-black font-bold">User Settings</span>
          <hr className='text-gray-800' />
          <SettingsForm />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
