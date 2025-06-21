export default function InterestCalculatorPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-2xl font-bold mb-4">P01/UI/interest-calculator</h1>

      <div className="bg-white rounded-xl shadow p-6 border border-gray-200 space-y-4">
        <h2 className="text-xl font-semibold">🧠 Project Instructions</h2>
        <p>
          You're building a <strong>simple interest calculator</strong> using
          React, Ant Design, and Tailwind CSS.
        </p>

        <ul className="list-decimal list-inside space-y-2">
          <li>
            <strong>All packages are already installed.</strong> You have React
            18, Vite, Tailwind, and Ant Design v5 ready to go.
          </li>
          <li>
            Replace the content of this page with a working interest calculator.
          </li>
          <li>
            The calculator must take 3 inputs using Ant Design's{" "}
            <code>InputNumber</code>:
            <ul className="list-disc list-inside ml-6">
              <li>Principal amount (in dollars)</li>
              <li>Annual interest rate (in %)</li>
              <li>Investment duration (in days)</li>
            </ul>
          </li>
          <li>
            When the user clicks <strong>Calculate</strong>, show a 1-second
            loading spinner, then display the result.
          </li>
          <li>
            Show the result in a styled result card. Make it look professional
            and readable.
          </li>
          <li>
            Use <code>useState</code> to manage form state and loading state.
          </li>
        </ul>

        <p className="mt-4">
          📦 Hint: Wrap your form in an Ant Design <code>&lt;Card&gt;</code>.
          Use Tailwind to center the layout and add spacing.
        </p>

        <p className="italic text-sm text-gray-600">
          Don’t over-engineer. Keep it simple, clean, and functional.
        </p>
      </div>
    </div>
  );
}
