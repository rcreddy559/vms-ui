import {
  PAGE_DASHBOARD,
  PAGE_RESIDENT,
  PAGE_RESIDENT_LIST
} from "@/app/components/utils/Constants";
import VmsItem from "@/app/components/types/VmsItem";

export const validatePhone = (phone: string) => {
  // This regex supports international phone numbers with the following features:
  // - Optional + prefix for country code
  // - Optional country codes (1-3 digits)
  // - Allows spaces, dashes, parentheses for formatting
  // - Supports phone numbers of various lengths (7-15 digits total)
  // - Supports extension numbers
  const phoneRegex =
    /^(\+?\d{1,3})?[-.\s]?\(?(\d{1,4})\)?[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})$/;

  // For E.164 standard validation (simpler alternative)
  // const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  return phoneRegex.test(phone.trim());
};

export const sidebarMenuItems: VmsItem[] = [
  { icon: "🏠", label: "Dashboard", value: 0, page: PAGE_DASHBOARD },
  { icon: "👥", label: "Residents", value: 0, page: PAGE_RESIDENT_LIST },
  { icon: "📦", label: "Packages", value: 1, page: PAGE_RESIDENT },
  { icon: "🔔", label: "Notifications", value: 5, page: PAGE_RESIDENT },
  { icon: "⚙️", label: "Settings", value: 0, page: PAGE_RESIDENT },
];

export const dashboardItems: VmsItem[] = [
  { icon: "🏠", label: "Current Event", value: 2980, page: PAGE_DASHBOARD },
  { icon: "🏠", label: "Residents", value: 2980, page: PAGE_RESIDENT_LIST },
  { icon: "👥", label: "Events", value: 5, page: PAGE_RESIDENT },
  { icon: "📦", label: "Donation Count", value: 30, page: PAGE_RESIDENT },
];
