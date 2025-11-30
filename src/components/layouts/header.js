export default function Header() {
  return (
    <div className="bg-black text-white-400 flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Header</h1>
      <div className="flex items-baseline gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}