function MatchScore({ score }) {
  const roundedScore = Math.round(
    Number(score || 0)
  );

  let message = "Low Match";

  if (roundedScore >= 70) {
    message = "Strong Match";
  } else if (roundedScore >= 50) {
    message = "Moderate Match";
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#450C3F] p-8 text-[#F5FBDA] shadow-lg">

      <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#B9D175]/10" />

      <div className="absolute -bottom-16 right-16 h-32 w-32 rounded-full bg-[#D9EFBD]/10" />

      <div className="relative">

        <p className="text-sm font-medium text-[#D9EFBD]">
          Resume Match
        </p>

        <div className="mt-3 flex items-end gap-2">

          <span className="text-6xl font-bold">
            {roundedScore}
          </span>

          <span className="pb-2 text-xl text-[#B9D175]">
            %
          </span>

        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#F5FBDA]/20">

          <div
            className="h-full rounded-full bg-[#B9D175] transition-all duration-700"
            style={{
              width: `${roundedScore}%`
            }}
          />

        </div>

        <p className="mt-4 font-semibold text-[#B9D175]">
          {message}
        </p>

      </div>

    </div>
  );
}

export default MatchScore;