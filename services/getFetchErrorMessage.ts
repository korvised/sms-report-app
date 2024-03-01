interface FetchError {
  message?: string
}

const getFetchErrorMessage = (error: unknown) => {
  const { message } = error as FetchError

  return {
    message: message || "Something went wrong. Please try again later.",
  }
}

export default getFetchErrorMessage
