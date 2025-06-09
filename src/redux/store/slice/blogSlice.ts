import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FacebookPost, InstagramPost, InstagramPostMediaTypes } from '@/util/types/types';

interface BlogState {
  instagramPosts: InstagramPost[];
  facebookPosts: FacebookPost[];  
  selectedPost: InstagramPost | null;
  loading: boolean;
  error: boolean;
}

const initialState: BlogState = {
  instagramPosts: [],
  facebookPosts: [],
  selectedPost: null,
  loading: false,
  error: false,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setInstagramPosts(state, action: PayloadAction<InstagramPost[]>) {
      state.instagramPosts = action.payload;
      state.loading = false;
    },
    setFacebookPosts(state, action: PayloadAction<any[]>) {
      state.facebookPosts = action.payload;
      state.loading = false;
    },
    selectPost(state, action: PayloadAction<InstagramPost | null>) {
      state.selectedPost = action.payload;
    },
    clearSelectedPost(state) {
      state.selectedPost = null;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<boolean>) {
      state.error = action.payload;
    },
  },
});

export const {
  setInstagramPosts,
  setFacebookPosts,
  selectPost,
  clearSelectedPost,
  setLoading,
  setError,
} = blogSlice.actions;

export default blogSlice.reducer;