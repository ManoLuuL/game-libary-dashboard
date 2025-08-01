import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { GameDetailsPageContentRightColumnProps } from './types';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Gamepad2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@radix-ui/react-select';

export const GameDetailsPageContentRightColumn = (props: GameDetailsPageContentRightColumnProps) => {
  const { game } = props;
  const { genres, parent_platforms, developers, publishers, website } = game ?? {};

  const GenresRender = genres?.map((genre) => (
    <Badge
      key={genre.id}
      variant='secondary'
    >
      {genre.name}
    </Badge>
  ));

  const ParentPlatformsRender = parent_platforms?.map((p) => p.platform.name).join(', ') || 'Multiplataforma';

  const DevelopersRender = developers && developers.length > 0 && (
    <>
      <div>
        <h4 className='font-medium mb-2'>Desenvolvedores</h4>
        <div className='space-y-1'>
          {developers.map((dev) => (
            <p
              key={dev.id}
              className='text-muted-foreground text-sm'
            >
              {dev.name}
            </p>
          ))}
        </div>
      </div>
      <Separator />
    </>
  );

  const PublishersRender = publishers && publishers.length > 0 && (
    <>
      <div>
        <h4 className='font-medium mb-2'>Editores</h4>
        <div className='space-y-1'>
          {publishers.map((pub) => (
            <p
              key={pub.id}
              className='text-muted-foreground text-sm'
            >
              {pub.name}
            </p>
          ))}
        </div>
      </div>
      <Separator />
    </>
  );

  const WebsiteRender = website && (
    <div>
      <h4 className='mb-2 font-medium'>Website Oficial</h4>
      <a
        href={website}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center space-x-1 text-primary text-sm hover:underline'
      >
        <span>Visitar site</span>
        <ExternalLink className='h-3 w-3' />
      </a>
    </div>
  );

  return (
    <div className='space-y-6'>
      <Card>
        <CardHeader>
          <CardTitle>Informações do Jogo</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div>
            <h4 className='mb-2 font-medium'>Gêneros</h4>
            <div className='flex flex-wrap gap-2'>{GenresRender}</div>
          </div>

          <Separator />

          <div>
            <h4 className='mb-2 font-medium'>Plataformas</h4>
            <div className='flex items-center space-x-1 text-muted-foreground text-sm'>
              <Gamepad2 className='h-4 w-4' />
              <span>{ParentPlatformsRender}</span>
            </div>
          </div>

          <Separator />

          {DevelopersRender}
          {PublishersRender}
          {WebsiteRender}
        </CardContent>
      </Card>

      <Link to='/'>
        <Button
          variant='outline'
          className='w-full'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          Voltar aos Jogos
        </Button>
      </Link>
    </div>
  );
};
