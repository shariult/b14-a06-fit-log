import Button from "@/components/ui/Button";

function NotFound() {
  return (
    <div className="p-10 text-center">
      <h2 className="heading-2">404</h2>
      <p className="subtitle mb-6">
        Page Not Found. Could not find requested resource.
      </p>

      <Button el="link" variant="primary-rounded" href="/">
        Return Home
      </Button>
    </div>
  );
}
export default NotFound;
