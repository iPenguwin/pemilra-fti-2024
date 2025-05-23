import { useEffect, useState } from "react";

import kandidat from "../data/kandidat.json";
import organisasi from "../data/organisasi.json";

const KetuaTerpilih = () => {
  const [lembaga, setLembaga] = useState<string>("SEMA");
  const [candidate, setCandidate] = useState<string[][]>([]);

  const changeCandidates = (e: any) => {
    const filteredCandidates: string[][] = kandidat
      .filter((k: any) => k.name === e)
      .map((k: any) => k.kandidat);
    setCandidate(filteredCandidates);
  };

  const changeLembaga = (e: any) => {
    setLembaga(e);
  };

  useEffect(() => {
    changeCandidates(lembaga);
  }, [lembaga]);

  return (
    <div className="bg-[#4ccf24]">
      <div
        id="kandidat"
        className="flex flex-col items-center justify-center gap-8 bg-[#022960] p-4 pb-8 pt-24"
      >
        <h1 className="text-center font-newsweekly text-5xl font-bold tracking-[0.1em]">
          HASIL PEMUNGUTAN SUARA
        </h1>
        <div className="flex flex-wrap justify-center gap-2">
          {organisasi.map((item) => {
            if (item.name !== lembaga) {
              return (
                <div key={`button-lembaga-${item.id}`}>
                  <label onClick={() => changeLembaga(item.name)}>
                    <div className="card btn-ghost btn h-full w-full cursor-pointer bg-base-100 py-4 shadow-xl transition duration-200">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <figure>
                          <img className="w-20 px-2" src={item.logo} alt={item.name} />
                        </figure>
                        <div>{item.name}</div>
                      </div>
                    </div>
                  </label>
                </div>
              );
            } else {
              return (
                <div key={`button-lembaga-${item.id}`}>
                  <label onClick={() => setLembaga(item.name)}>
                    <div className="card btn-ghost btn h-full w-full cursor-pointer bg-[#023a89] py-4 shadow-xl transition duration-200">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <figure>
                          <img className="w-20 px-2" src={item.logo} alt={item.name} />
                        </figure>
                        <div>{item.name}</div>
                      </div>
                    </div>
                  </label>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div
        id="kandidat"
        className="flex flex-col items-center justify-center gap-2 bg-[#022960] pt-8"
      >
        <h1 className="text-center text-2xl tracking-[0.1em]">JUMLAH VOTE</h1>
      </div>
      <div className="justify-centerpx-8 flex flex-col items-center bg-[#022960]">
        <div className="flex flex-col justify-center gap-4 lg:flex-row">
          {candidate[0] &&
            candidate[0].map((k: any) => {
              if (k.jumlah_vote === Math.max(...candidate[0].map((x: any) => x.jumlah_vote))) {
                return (
                  <div
                    key={`candidate-${lembaga}-${k.id}`}
                    className="card flex w-full flex-col items-center justify-start gap-4 px-4 py-8 "
                  >
                    <div className="rounded-full border-4 border-[#fb8500] p-12">
                      <h2 className="text-4xl font-bold text-[#fb8500]">{k.jumlah_vote}</h2>
                    </div>
                    <div
                      key={`${lembaga}-${k.id}`}
                      className="card flex w-full flex-col items-center justify-center gap-4 border-2 border-[#fb8500] bg-base-300 p-8"
                    >
                      <img
                        className="aspect-square h-48 w-48 rounded-2xl bg-primary bg-center p-2"
                        src={k.foto}
                        alt={k.name}
                      />
                      <div className="flex flex-col items-center gap-2 text-center">
                        <h2 className="text-center">Kandidat Nomer Urut {k.id}</h2>
                        <h2 className="pb-4 text-center font-newsweekly text-4xl font-bold">
                          {k.name}
                        </h2>
                        <label
                          htmlFor={`kandidat-${k.name}-${k.id}`}
                          className="btn-ghost btn w-fit bg-primary"
                        >
                          <div className="card-actions justify-start">Lebih lanjut</div>
                        </label>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={`candidate-${lembaga}-${k.id}`}
                    className="card flex w-full flex-col items-center justify-start gap-4 px-4 py-8 "
                  >
                    <div className="rounded-full border-4 border-[#0098b2] p-12">
                      <h2 className="text-4xl font-bold text-[#00daff]">{k.jumlah_vote}</h2>
                    </div>
                    <div
                      key={`${lembaga}-${k.id}`}
                      className="card flex w-full flex-col items-center justify-center gap-4 bg-base-300 p-8"
                    >
                      <img
                        className="aspect-square h-48 w-48 rounded-2xl bg-primary bg-center p-2"
                        src={k.foto}
                        alt={k.name}
                      />
                      <div className="flex flex-col items-center gap-2 text-center">
                        <h2 className="text-center">Kandidat Nomer Urut {k.id}</h2>
                        <h2 className="pb-4 text-center font-newsweekly text-4xl font-bold">
                          {k.name}
                        </h2>
                        <label
                          htmlFor={`kandidat-${k.name}-${k.id}`}
                          className="btn-ghost btn w-fit bg-primary"
                        >
                          <div className="card-actions justify-start">Lebih lanjut</div>
                        </label>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default KetuaTerpilih;
