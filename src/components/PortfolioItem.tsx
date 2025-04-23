import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  videoId?: string;
}

const PortfolioItem = ({ title, category, imageUrl, videoId }: PortfolioItemProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="portfolio-item overflow-hidden cursor-pointer bg-transparent border-0 shadow-none">
          <CardContent className="p-0">
            <div className="relative overflow-hidden group">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={imageUrl}
                  alt={title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </AspectRatio>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <span className="text-primary text-sm font-medium mb-1">{category}</span>
                <h3 className="text-white text-lg font-heading">{title}</h3>
                <span className="text-white/70 text-xs mt-2">Нажмите для просмотра</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <div className="mt-2">
          <h2 className="text-xl font-heading mb-2">{title}</h2>
          <p className="text-muted-foreground text-sm mb-4">{category}</p>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            ) : (
              <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
            )}
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioItem;
