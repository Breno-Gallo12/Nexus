export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 text-center mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-2">
        <p className="text-textSec text-sm">
          © {new Date().getFullYear()} Breno Gallo. Todos os direitos reservados.
        </p>
        <p className="text-textSec text-xs flex items-center gap-1 justify-center">
          Desenvolvido com <span className="text-primary font-semibold">React</span> + <span className="text-primary font-semibold">Flask</span>
        </p>
      </div>
    </footer>
  );
}