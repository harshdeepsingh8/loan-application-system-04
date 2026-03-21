export const formatErrorResponse = (err: any) => {
  return {
    success: false,
    message: err.message || "Something went wrong",
    statusCode: err.statusCode || 500,
    timestamp: new Date().toISOString(),
  };
};