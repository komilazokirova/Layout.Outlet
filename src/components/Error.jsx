function Error({ message }) {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <h2 className="text-2xl font-bold text-red-500">
        {message}
      </h2>
    </div>
  );
}

export default Error;