<template>
  <div v-if="book" class="flex justify-center p-10">
    <div class="border-gray-400 border-2 bg-gray-500 p-10">
      <div class="flex items-center">
        <svg
          @click="$router.go(-1)"
          class="h-10 w-10 text-white cursor-pointer flex"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
        </svg>
        <span
          class="m-4 font-semibold text-3xl"
          :title="book.volumeInfo.title"
          >{{ book.volumeInfo.title }}</span
        >
      </div>

      <hr class="my-4" />

      <div class="flex">
        <div
          v-if="book.volumeInfo.imageLinks?.thumbnail"
          class="m-3 flex-initial"
        >
          <img :src="book.volumeInfo.imageLinks.thumbnail" alt="poster" />
        </div>
        <div
          v-else
          class="relative m-3 flex-initial w-52 h-72 px-5 bg-gray-800"
        >
          <span class="absolute inset-0 flex items-center justify-center">
            <svg
              class="h-10 w-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </span>
        </div>
        <div class="flex flex-col">
          <div v-if="book.volumeInfo.authors?.length" class="mt-2">
            <span class="font-semibold">{{
              $tc('info.authors', book.volumeInfo.authors.length === 1 ? 1 : 2)
            }}</span>
            : {{ book.volumeInfo.authors.join(', ') }}
          </div>
          <div v-if="book.volumeInfo.publishedDate" class="mt-2">
            <span class="font-semibold">{{ $t('info.publishedDate') }}</span>
            : {{ book.volumeInfo.publishedDate }}
          </div>
          <div v-if="book.volumeInfo.publisher" class="mt-2">
            <span class="font-semibold">{{ $t('info.publisher') }}</span>
            : {{ book.volumeInfo.publisher }}
          </div>
          <div v-if="book.volumeInfo.language" class="mt-2">
            <span class="font-semibold">{{ $t('info.lang') }}</span>
            : <span class="uppercase">{{ book.volumeInfo.language }}</span>
          </div>
          <div v-if="book.volumeInfo.categories" class="mt-2">
            <span class="font-semibold">{{ $t('info.categories') }}</span>
            : {{ book.volumeInfo.categories.join(', ') }}
          </div>
          <div v-if="book.volumeInfo.description" class="mt-2 max-w-3xl">
            <span class="font-semibold">{{ $t('info.description') }}</span>
            : {{ book.volumeInfo.description }}
          </div>
          <div v-if="book.saleInfo.buyLink" class="mt-2">
            <a :href="book.saleInfo.buyLink">
              <span class="font-semibold uppercase">{{
                $t('info.buyLink')
              }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { EModules, EPages } from '@/enums'
import { GettersTypes } from '@/enums/getter-types'
import { IBook } from '@/interfaces'
import { getModule } from '@/utils'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: EPages.DETAILS,
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const store = useStore()

    const books: IBook[] =
      store.getters[getModule(EModules.BOOKS, GettersTypes.BOOK_RESULTS)]
    const book = books.find(book => book.id === props.id)

    return { book }
  },
})
</script>
