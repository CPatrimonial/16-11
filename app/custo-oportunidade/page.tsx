"use client";

import CustoOportunidadeCalculadora from '@/components/calculadora/custo-oportunidade-calculadora';
import { VideoModal } from '@/components/calculadora/components/video-modal';

export default function CustoOportunidadePage() {
  return (
    <div className="pt-16">
      <VideoModal videoId="BqbYIlbIQtQ" />
      <CustoOportunidadeCalculadora />
    </div>
  );
}