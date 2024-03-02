import styled from 'styled-components'

type CategoryProps = {
  categories: Record<string, number>
  selectedCategory: string
  handleSelect: (category: string) => void
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 20px;
  margin-top: 80px;

  @media (max-width: 1023px) {
    gap: 5px 15px;
  }

  @media (max-width: 767px) {
    gap: 5px 10px;
  }
`

const Item = styled.div<{ $selected: boolean }>`
  font-size: 16px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 300)};
  cursor: ${({ $selected }) => ($selected ? 'default' : 'pointer')};

  @media (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`

export default function Category({
  categories,
  selectedCategory,
  handleSelect,
}: CategoryProps) {
  return (
    <Wrapper>
      {Object.entries(categories).map(([category, count]) => (
        <Item
          onClick={() => handleSelect(category)}
          $selected={category === selectedCategory}
          key={category}
        >
          #{category}({count})
        </Item>
      ))}
    </Wrapper>
  )
}
