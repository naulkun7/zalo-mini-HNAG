import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react"
import { fetchAndSaveData } from "./fetchAPI"
import PropTypes from "prop-types"

const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [combinedData, setCombinedData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAndSaveData()
      .then((data) => {
        setCombinedData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching data:", err)
        setError(err)
        setIsLoading(false)
      })
  }, [])

  const contextValue = useMemo(
    () => ({
      combinedData,
      isLoading,
      error,
    }),
    [combinedData, isLoading, error]
  )

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useData = () => useContext(DataContext)
