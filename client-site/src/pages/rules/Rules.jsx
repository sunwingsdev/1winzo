const Rules = () => {
  const rules = {
    "Basic Terms": {
      1.1: "A betting platform - a legal entity engaged in betting activities in accordance with the licensing and legislative requirements of the country.",
      1.2: "Client - an individual who agrees with the Rules for accepting bets, registered on the website (4rabet.com) (and other versions of the website).",
      // Add all other terms here...
    },
    "Rules for Specific Sports": {
      Soccer: {
        "2.1.1":
          "Bets on the outcome of a match will be decided based on two halves of the scheduled number of minutes...",
        "2.1.2": "Corners awarded but not taken are not considered.",
        // Add other soccer rules here...
      },
    },
  };
  return (
    <div className="bg-[#091222] pt-10 sm:pt-14 mt-[51px] lg:mt-0 pb-8 md:pr-20">
      <div className="bg-[#152234] mt-8 mx-8">
        <div className="flex flex-col items-center gap-4 overflow-y-auto h-[70vh] md:h-[80vh] scrollbar-hide">
          <p className="text-xl text-white font-bold mt-6 text-center">
            Rules for Specific sports - New Entertainment Development N.V.
          </p>
          <div className="w-full px-8 flex flex-col gap-4">
            <p className="text-white font-bold">1. Basic terms</p>
            <p className="text-slate-500">
              1.1. A betting platform - a legal entity engaged in betting
              activities in accordance with the licensing and legislative
              requirements of the country.
            </p>
            <p className="text-slate-500">
              1.2. Client - an individual who agrees with the Rules for
              accepting bets, registered on the website (4rabet.com) (and other
              versions of the website).
            </p>
            <p className="text-slate-500">
              1.3. Bet - a risk agreement concluded between the Client and the
              Betting Company on the outcome of an event in which they do not
              participate, implying a win. Bets are accepted on the terms
              previously proposed by the platform.
            </p>
            <p className="text-slate-500">
              1.4. Bet - the amount of money transferred by the client to the
              bookmaker&apos;s platform and which is the main condition for
              participating in the game in accordance with these Rules.
            </p>
            <p className="text-slate-500">
              1.5. Result - the outcome of an event on which the platform offers
              to place a bet.
            </p>
            <p className="text-slate-500">
              1.6. Coefficient - the number by which the player&apos;s bet
              amount is multiplied when determining the payout amount if the bet
              wins.
            </p>
            <p className="text-slate-500">
              1.7. Winning - funds that are paid to the Client in case of the
              guessed outcome on which the bet was made.
            </p>
            <p className="text-slate-500">
              1.8. Single - a bet on a separate outcome of an event. A single
              bet payout is equal to the product of the bet amount set by the
              result price.
            </p>
            <p className="text-slate-500">
              1.9. Combo (express) - a bet on several independent outcomes of
              events. To win in the express, it is necessary that there is no
              loss for any of the outcomes included in the express. Losing one
              of the combo results means losing the entire combo. The combo
              payout is equal to the product of the bet amount by the odds of
              all selections included in the combo.
            </p>
            <p className="text-slate-500">
              1.10. System - a set of combinations, which is a complete search
              for combinations of the same size from a fixed set of outcomes. It
              is characterized by the same bet for each express (options system)
              and the same number of selections in each express. The betting
              system must indicate the total number of selections and the number
              of combinations (system option). The payout for the system is
              equal to the amount of payouts for the combo included in the
              system.
            </p>
            <p className="text-slate-500">
              1.11. If the odds are more than two digits after the decimal
              point, the payout will be rounded to the second digit after the
              decimal point.
            </p>
            <p className="text-slate-500">
              1.12. “Cash out” - an individual offer initiated by the Sportsbook
              platform and addressed to the bettor, aimed at changing one or
              more essential conditions of the bet (odds, time of calculation of
              the event, etc.) In order to fix a new result and complete the
              bet, the current time (hereinafter - Cash out). An offer to
              exchange a bet can be either accepted or rejected by the
              participant of the bet. By choosing Cash out, the bet participant
              confirms his agreement with the new essential terms of the bet.
              Cash Out bets can be offered for both prematch and real-time bets.
              The bookmaker reserves the right to change the offer to redeem a
              bet over time or not to form an application to redeem a bet
              without giving reasons.
            </p>
          </div>
          <div className="w-full px-8 flex flex-col gap-4">
            <p className="text-white font-bold">1. Basic terms</p>
            <p className="text-slate-500">
              1.1. A betting platform - a legal entity engaged in betting
              activities in accordance with the licensing and legislative
              requirements of the country.
            </p>
            <p className="text-slate-500">
              1.2. Client - an individual who agrees with the Rules for
              accepting bets, registered on the website (4rabet.com) (and other
              versions of the website).
            </p>
            <p className="text-slate-500">
              1.3. Bet - a risk agreement concluded between the Client and the
              Betting Company on the outcome of an event in which they do not
              participate, implying a win. Bets are accepted on the terms
              previously proposed by the platform.
            </p>
            <p className="text-slate-500">
              1.4. Bet - the amount of money transferred by the client to the
              bookmaker&apos;s platform and which is the main condition for
              participating in the game in accordance with these Rules.
            </p>
            <p className="text-slate-500">
              1.5. Result - the outcome of an event on which the platform offers
              to place a bet.
            </p>
            <p className="text-slate-500">
              1.6. Coefficient - the number by which the player&apos;s bet
              amount is multiplied when determining the payout amount if the bet
              wins.
            </p>
            <p className="text-slate-500">
              1.7. Winning - funds that are paid to the Client in case of the
              guessed outcome on which the bet was made.
            </p>
            <p className="text-slate-500">
              1.8. Single - a bet on a separate outcome of an event. A single
              bet payout is equal to the product of the bet amount set by the
              result price.
            </p>
            <p className="text-slate-500">
              1.9. Combo (express) - a bet on several independent outcomes of
              events. To win in the express, it is necessary that there is no
              loss for any of the outcomes included in the express. Losing one
              of the combo results means losing the entire combo. The combo
              payout is equal to the product of the bet amount by the odds of
              all selections included in the combo.
            </p>
            <p className="text-slate-500">
              1.10. System - a set of combinations, which is a complete search
              for combinations of the same size from a fixed set of outcomes. It
              is characterized by the same bet for each express (options system)
              and the same number of selections in each express. The betting
              system must indicate the total number of selections and the number
              of combinations (system option). The payout for the system is
              equal to the amount of payouts for the combo included in the
              system.
            </p>
            <p className="text-slate-500">
              1.11. If the odds are more than two digits after the decimal
              point, the payout will be rounded to the second digit after the
              decimal point.
            </p>
            <p className="text-slate-500">
              1.12. “Cash out” - an individual offer initiated by the Sportsbook
              platform and addressed to the bettor, aimed at changing one or
              more essential conditions of the bet (odds, time of calculation of
              the event, etc.) In order to fix a new result and complete the
              bet, the current time (hereinafter - Cash out). An offer to
              exchange a bet can be either accepted or rejected by the
              participant of the bet. By choosing Cash out, the bet participant
              confirms his agreement with the new essential terms of the bet.
              Cash Out bets can be offered for both prematch and real-time bets.
              The bookmaker reserves the right to change the offer to redeem a
              bet over time or not to form an application to redeem a bet
              without giving reasons.
            </p>
          </div>
          <div className="w-full px-8 flex flex-col gap-4">
            <p className="text-white font-bold">1. Basic terms</p>
            <p className="text-slate-500">
              1.1. A betting platform - a legal entity engaged in betting
              activities in accordance with the licensing and legislative
              requirements of the country.
            </p>
            <p className="text-slate-500">
              1.2. Client - an individual who agrees with the Rules for
              accepting bets, registered on the website (4rabet.com) (and other
              versions of the website).
            </p>
            <p className="text-slate-500">
              1.3. Bet - a risk agreement concluded between the Client and the
              Betting Company on the outcome of an event in which they do not
              participate, implying a win. Bets are accepted on the terms
              previously proposed by the platform.
            </p>
            <p className="text-slate-500">
              1.4. Bet - the amount of money transferred by the client to the
              bookmaker&apos;s platform and which is the main condition for
              participating in the game in accordance with these Rules.
            </p>
            <p className="text-slate-500">
              1.5. Result - the outcome of an event on which the platform offers
              to place a bet.
            </p>
            <p className="text-slate-500">
              1.6. Coefficient - the number by which the player&apos;s bet
              amount is multiplied when determining the payout amount if the bet
              wins.
            </p>
            <p className="text-slate-500">
              1.7. Winning - funds that are paid to the Client in case of the
              guessed outcome on which the bet was made.
            </p>
            <p className="text-slate-500">
              1.8. Single - a bet on a separate outcome of an event. A single
              bet payout is equal to the product of the bet amount set by the
              result price.
            </p>
            <p className="text-slate-500">
              1.9. Combo (express) - a bet on several independent outcomes of
              events. To win in the express, it is necessary that there is no
              loss for any of the outcomes included in the express. Losing one
              of the combo results means losing the entire combo. The combo
              payout is equal to the product of the bet amount by the odds of
              all selections included in the combo.
            </p>
            <p className="text-slate-500">
              1.10. System - a set of combinations, which is a complete search
              for combinations of the same size from a fixed set of outcomes. It
              is characterized by the same bet for each express (options system)
              and the same number of selections in each express. The betting
              system must indicate the total number of selections and the number
              of combinations (system option). The payout for the system is
              equal to the amount of payouts for the combo included in the
              system.
            </p>
            <p className="text-slate-500">
              1.11. If the odds are more than two digits after the decimal
              point, the payout will be rounded to the second digit after the
              decimal point.
            </p>
            <p className="text-slate-500">
              1.12. “Cash out” - an individual offer initiated by the Sportsbook
              platform and addressed to the bettor, aimed at changing one or
              more essential conditions of the bet (odds, time of calculation of
              the event, etc.) In order to fix a new result and complete the
              bet, the current time (hereinafter - Cash out). An offer to
              exchange a bet can be either accepted or rejected by the
              participant of the bet. By choosing Cash out, the bet participant
              confirms his agreement with the new essential terms of the bet.
              Cash Out bets can be offered for both prematch and real-time bets.
              The bookmaker reserves the right to change the offer to redeem a
              bet over time or not to form an application to redeem a bet
              without giving reasons.
            </p>
          </div>
          <div className="w-full px-8 flex flex-col gap-4">
            <p className="text-white font-bold">1. Basic terms</p>
            <p className="text-slate-500">
              1.1. A betting platform - a legal entity engaged in betting
              activities in accordance with the licensing and legislative
              requirements of the country.
            </p>
            <p className="text-slate-500">
              1.2. Client - an individual who agrees with the Rules for
              accepting bets, registered on the website (4rabet.com) (and other
              versions of the website).
            </p>
            <p className="text-slate-500">
              1.3. Bet - a risk agreement concluded between the Client and the
              Betting Company on the outcome of an event in which they do not
              participate, implying a win. Bets are accepted on the terms
              previously proposed by the platform.
            </p>
            <p className="text-slate-500">
              1.4. Bet - the amount of money transferred by the client to the
              bookmaker&apos;s platform and which is the main condition for
              participating in the game in accordance with these Rules.
            </p>
            <p className="text-slate-500">
              1.5. Result - the outcome of an event on which the platform offers
              to place a bet.
            </p>
            <p className="text-slate-500">
              1.6. Coefficient - the number by which the player&apos;s bet
              amount is multiplied when determining the payout amount if the bet
              wins.
            </p>
            <p className="text-slate-500">
              1.7. Winning - funds that are paid to the Client in case of the
              guessed outcome on which the bet was made.
            </p>
            <p className="text-slate-500">
              1.8. Single - a bet on a separate outcome of an event. A single
              bet payout is equal to the product of the bet amount set by the
              result price.
            </p>
            <p className="text-slate-500">
              1.9. Combo (express) - a bet on several independent outcomes of
              events. To win in the express, it is necessary that there is no
              loss for any of the outcomes included in the express. Losing one
              of the combo results means losing the entire combo. The combo
              payout is equal to the product of the bet amount by the odds of
              all selections included in the combo.
            </p>
            <p className="text-slate-500">
              1.10. System - a set of combinations, which is a complete search
              for combinations of the same size from a fixed set of outcomes. It
              is characterized by the same bet for each express (options system)
              and the same number of selections in each express. The betting
              system must indicate the total number of selections and the number
              of combinations (system option). The payout for the system is
              equal to the amount of payouts for the combo included in the
              system.
            </p>
            <p className="text-slate-500">
              1.11. If the odds are more than two digits after the decimal
              point, the payout will be rounded to the second digit after the
              decimal point.
            </p>
            <p className="text-slate-500">
              1.12. “Cash out” - an individual offer initiated by the Sportsbook
              platform and addressed to the bettor, aimed at changing one or
              more essential conditions of the bet (odds, time of calculation of
              the event, etc.) In order to fix a new result and complete the
              bet, the current time (hereinafter - Cash out). An offer to
              exchange a bet can be either accepted or rejected by the
              participant of the bet. By choosing Cash out, the bet participant
              confirms his agreement with the new essential terms of the bet.
              Cash Out bets can be offered for both prematch and real-time bets.
              The bookmaker reserves the right to change the offer to redeem a
              bet over time or not to form an application to redeem a bet
              without giving reasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
