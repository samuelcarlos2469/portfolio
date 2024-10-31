import { useState } from "react";
import Card from "../components/Card";
import About from "./about";

const Home = () => {
  //msm coisa que foi feito no BuscaCep do Douglas
  const [activeTab, setActiveTab] = useState("Projetos");

  return (
    <div className="p-8 flex flex-col items-center">
      <div className="flex mb-6">
        <button
          onClick={() => setActiveTab("Projetos")}
          className={`px-4 py-2 ${
            activeTab === "Projetos" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Projetos
        </button>
        <button
          onClick={() => setActiveTab("Info")}
          className={`px-4 py-2 ${
            activeTab === "Info" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Info
        </button>
      </div>

      <div className="wrapper">
        <div
          className={`content ${
            activeTab === "Projetos" ? "translate-projects" : "translate-info"
          }`}
        >
          <div className="section">
            <h1 className="text-3xl font-bold mb-6">Projetos</h1>
            <Card title="Projeto 1" description="GymAPP" />
            <Card title="Projeto 2" description="Descrição do projeto 2." />
            <Card title="Projeto 3" description="Descrição do projeto 3." />
          </div>
          <div className="section info">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
