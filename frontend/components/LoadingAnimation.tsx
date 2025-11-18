export default function LoadingAnimation({ isDone }: { isDone: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {!isDone ? (
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
      ) : (
        <div className="text-green-600 animate-pulse text-lg">✓ Done</div>
      )}
    </div>
  );
}
