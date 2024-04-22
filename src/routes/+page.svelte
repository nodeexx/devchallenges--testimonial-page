<script lang="ts">
interface ReviewCard {
  logo: string;
  logoAlt: string;
  stars: number;
  author: string;
  quote: string;
}

const FEATURE_LIST_ITEMS = [
  'Checklist to Review an Academic Paper',
  'Peer Review Checklist',
  'Checklist for Editors, Reviewers, and Authors of SPIE Journals',
];

const REVIEW_CARDS: ReviewCard[] = [
  {
    logo: '/images/google-testimonial.png',
    logoAlt: 'Google logo',
    stars: 4,
    author: 'Samantha Lee',
    quote: 'The checklist ensures that the review process is thorough',
  },
  {
    logo: '/images/meta-testimonial.png',
    logoAlt: 'Meta logo',
    stars: 5,
    author: 'Rachel Patel',
    quote: 'I highly recommend the Writecream Business Description',
  },
];
const RANGE_OF_5 = Array.from({ length: 5 }, (_, i) => i);
</script>

<div class="flex flex-col gap-16 lg:flex-row lg:gap-8">
  <!-- Hero part -->
  <div class="flex-1">
    <!-- Hero icon -->
    <div
      class="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-challenge-yellow text-[24px] font-semibold"
    >
      ⭐
    </div>

    <div class="flex flex-col gap-3">
      <h1 class="text-[36px] font-semibold">Reviewers</h1>
      <p
        class="text-[20px] font-normal leading-[1.75] text-challenge-dark-gray"
      >
        Reviewers is where people can access guidelines, checklists, and other
        tools to assist them in reviewing papers or manuscripts. It provides a
        structured approach to ensure that the review process is thorough,
        efficient, and consistent.
      </p>
      <ul class="features-list list-none p-0">
        {#each FEATURE_LIST_ITEMS as item}
          <li
            class="bg-[url('/images/Done_ring_round_fill.svg')] bg-[length:24px_24px] bg-no-repeat pb-3 pl-[calc(24px+8px)] text-[14px] font-normal leading-[1.75] text-challenge-dark-gray last:pb-0"
          >
            {item}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Reviews part -->
  <div class="grid w-[572px] shrink-0 grid-cols-1 gap-[40px] lg:pt-2">
    {#each REVIEW_CARDS as card}
      <div
        class="flex h-[185px] w-[357px] flex-col gap-4 justify-self-end rounded-xl bg-challenge-white px-[40px] py-[28px] shadow-[0_30px_100px_0] shadow-challenge-black/5 even:justify-self-start"
      >
        <div class="flex gap-4">
          <img
            src="{card.logo}"
            alt="{card.logoAlt}"
            class="h-[30px] select-none"
            draggable="false"
          />
          <div class="flex items-center gap-1">
            {#each RANGE_OF_5 as starIndex}
              <div
                class="h-[24px] w-[24px] bg-[length:24px_24px] bg-no-repeat"
                class:star--filled="{starIndex + 1 <= card.stars}"
                class:star--empty="{starIndex + 1 > card.stars}"
              ></div>
            {/each}
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-[16px] font-semibold text-challenge-black"
            >{card.author}</span
          >
          <p
            class="text-[16px] font-normal leading-[1.75] text-challenge-dark-gray"
          >
            {card.quote}
          </p>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
.star--filled {
  background-image: url('/images/Star_fill.svg');
}

.star--empty {
  background-image: url('/images/Star_fill_gray.svg');
}
</style>
