'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

type Props = {
  id: string;
};
function DeletePost({ id }: Props) {
  const { toast } = useToast();
  const router = useRouter();

  async function testeFC() {
    const res = await fetch('/api/perfil/delete-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    });

    const result = await res.json();

    if (result.status == 400) {
      toast({
        variant: 'destructive',
        title: result.message,
        description: `${result.message}`
      });
      return;
    }

    toast({
      variant: 'success',
      title: result.message
    });
    router.refresh();
  }
  return (
    <>
      <Toaster />

      <button
        onClick={testeFC}
        type="button"
        className="mt-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Delete post
      </button>
    </>
  );
}

export default DeletePost;
