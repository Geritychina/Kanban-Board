import KanbanBoard from "./components/KanbanBoard";
export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">🗂️ Канбан Дъска</h1>
      <KanbanBoard />
    </div>
  );
}
