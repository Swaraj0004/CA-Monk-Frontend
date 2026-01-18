export function timeAgo(dateString: string) {
  const now = new Date().getTime();
  const past = new Date(dateString).getTime();

  const diff = Math.floor((now - past) / 1000); 

  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hrs ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} days ago`;

  return new Date(dateString).toLocaleDateString();
}
