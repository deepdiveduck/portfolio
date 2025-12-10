const parseLocalDate = (dateString: string): Date => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day || 1);
};

export const calculateDuration = (
    startDate: string,
    endDate?: string
): string => {
    const start = parseLocalDate(startDate);
    const end =
        endDate && endDate.toLowerCase() !== "present"
            ? parseLocalDate(endDate)
            : new Date();

    // Inclusive of both start and end months
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth() + 1; // +1 to include both months

    if (months < 0) {
        years--;
        months += 12;
    } else if (months > 12) {
        years++;
        months -= 12;
    }

    const parts: string[] = [];

    if (years > 0) {
        parts.push(`${years} year${years > 1 ? "s" : ""}`);
    }

    if (months > 0) {
        parts.push(`${months} month${months > 1 ? "s" : ""}`);
    }

    if (parts.length === 0) {
        return "1 month";
    }

    return parts.join(" ");
};

export const formatDateRange = (
    startDate: string,
    endDate?: string
): string => {
    const start = parseLocalDate(startDate);
    const startFormatted = start.toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });

    const endFormatted =
        endDate && endDate.toLowerCase() !== "present"
            ? parseLocalDate(endDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
              })
            : "Present";

    const duration = calculateDuration(startDate, endDate);

    return `${startFormatted} - ${endFormatted} (${duration})`;
};
