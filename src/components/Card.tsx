interface ModuleCardProps {
  title: string;
  description: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, description }) => (
  <div className="bg-white shadow-lg p-6 rounded-lg max-w-md w-full mb-6">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ModuleCard;
