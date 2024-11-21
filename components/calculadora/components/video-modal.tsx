"use client";

import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

interface VideoModalProps {
  videoId: string;
}

export function VideoModal({ videoId }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Atualiza a largura da janela quando o componente monta
    setWindowWidth(window.innerWidth);

    // Atualiza a largura quando a janela é redimensionada
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcula as dimensões do vídeo baseado no tamanho da tela
  const getVideoDimensions = () => {
    const maxWidth = Math.min(windowWidth * 0.8, 800); // 80% da largura da tela, máximo de 800px
    const width = maxWidth;
    const height = (width * 9) / 16; // Mantém a proporção 16:9

    return { width, height };
  };

  const { width, height } = getVideoDimensions();

  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onEnd = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-[90vw] w-auto">
          {/* Botão de fechar no canto superior direito */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 focus:outline-none"
            aria-label="Fechar"
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Conteúdo do vídeo */}
          <div className="p-1">
            <YouTube
              videoId={videoId}
              opts={opts}
              onEnd={onEnd}
              className="aspect-video"
              iframeClassName="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
