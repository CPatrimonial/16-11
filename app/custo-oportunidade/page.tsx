"use client";

import CustoOportunidadeCalculadora from '@/components/calculadora/custo-oportunidade-calculadora';
import { VideoModal } from '@/components/calculadora/components/video-modal';

export default function CustoOportunidadePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <CustoOportunidadeCalculadora />
    </div>
  );
}