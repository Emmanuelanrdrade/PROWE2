"use client"

import { createContext, useContext, useState, useEffect } from "react"

const NotificationContext = createContext()

export const useNotifications = () => useContext(NotificationContext)

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getNotifications = async () => {
      setLoading(true)
      try {
        // In a real app, this would fetch from your API
        // const data = await fetchNotifications();

        // Mock data for demonstration
        const mockData = [
          {
            id: 1,
            title: "New marketing request",
            message: "Product X needs marketing",
            read: false,
            date: new Date(),
          },
          {
            id: 2,
            title: "Task assigned",
            message: "You've been assigned to Product Y",
            read: true,
            date: new Date(Date.now() - 86400000),
          },
        ]

        setNotifications(mockData)
      } catch (error) {
        console.error("Failed to fetch notifications:", error)
      } finally {
        setLoading(false)
      }
    }

    getNotifications()

    // Set up polling for new notifications
    const interval = setInterval(getNotifications, 60000)
    return () => clearInterval(interval)
  }, [])

  const addNotification = (notification) => {
    setNotifications((prev) => [{ ...notification, id: Date.now(), read: false, date: new Date() }, ...prev])
  }

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const value = {
    notifications,
    loading,
    addNotification,
    markAsRead,
    markAllAsRead,
  }

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}

