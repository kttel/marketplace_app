import { useEffect, useState, useCallback } from "react"

export const useToggle = (initial) => {
    const [open, setOpen] = useState(initial);
    return [open, useCallback(() => setOpen(status => !status))];
};

export default function useOnlineStatus () {
  const [online, setOnline] = useState(navigator.onLine)

  useEffect(() => {
    function handleStatusChange() {
      setOnline(navigator.onLine)
    }

    window.addEventListener("online", handleStatusChange)
    window.addEventListener("offline", handleStatusChange)

    return () => {
      window.removeEventListener("online", handleStatusChange)
      window.removeEventListener("offline", handleStatusChange)
    }
  }, [])

  return { online, setOnline }
}

export const useDocumentTitle = (title) => {
    useEffect(() => {
      document.title = title;
    }, [title]);
  };